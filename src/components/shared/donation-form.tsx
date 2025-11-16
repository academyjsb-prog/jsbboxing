
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const oneTimeAmounts = ['1100', '2200', '5500'];
const monthlyAmounts = ['500', '1000', '2000'];

const donationSchema = z.object({
  donationType: z.enum(['one-time', 'monthly']),
  amountOption: z.string(),
  customAmount: z.string().optional(),
  citizen: z.enum(['indian', 'foreign']),
  coverCharges: z.boolean().default(false),
  anonymous: z.boolean().default(false),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid 10-digit phone number.'}).max(10, { message: 'Please enter a valid 10-digit phone number.'}),
}).refine(data => {
    if (data.amountOption === 'custom' && (!data.customAmount || +data.customAmount <= 0)) {
        return false;
    }
    return true;
}, {
    message: 'Please enter a valid custom amount.',
    path: ['customAmount'],
});


type DonationFormValues = z.infer<typeof donationSchema>;

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function DonationForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = useState('2200');

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      donationType: 'one-time',
      amountOption: '2200',
      citizen: 'indian',
      coverCharges: true,
      anonymous: false,
      name: '',
      email: '',
      phone: '',
    },
  });

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    form.setValue('amountOption', amount);
    if (amount !== 'custom') {
        form.setValue('customAmount', '');
    }
  }

  function onSubmit(data: DonationFormValues) {
    let finalAmount = data.amountOption === 'custom' ? data.customAmount : data.amountOption;
    if (!finalAmount || +finalAmount <= 0) {
      toast({
        variant: 'destructive',
        title: 'Invalid Amount',
        description: 'Please select or enter a valid donation amount.',
      });
      return;
    }

    if (data.coverCharges) {
        finalAmount = String(Math.ceil(Number(finalAmount) * 1.03));
    }

    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: Number(finalAmount) * 100, // Amount in paise
        currency: "INR",
        name: "JSB Boxing Academy",
        description: `Donation (${data.donationType})`,
        image: "https://ik.imagekit.io/nb6cfzd7m/logo.png", // A URL to your logo
        handler: function (response: any) {
            toast({
              title: "Payment Successful!",
              description: `Thank you, ${data.name}, for your generous donation of ₹${finalAmount}.`,
            });
            console.log("Razorpay Response:", response);
            router.push('/');
        },
        prefill: {
            name: data.name,
            email: data.email,
            contact: data.phone,
        },
        notes: {
            donationType: data.donationType,
            anonymous: data.anonymous,
            citizen: data.citizen,
            originalAmount: data.amountOption === 'custom' ? data.customAmount : data.amountOption,
        },
        theme: {
            color: "#E63946"
        },
        modal: {
            ondismiss: function() {
                toast({
                    variant: 'destructive',
                    title: 'Payment Cancelled',
                    description: 'The payment process was not completed.',
                });
            }
        }
    };

    if (!options.key) {
        toast({
            variant: 'destructive',
            title: 'Configuration Error',
            description: 'Razorpay is not configured. Please contact the site administrator.',
        });
        console.error("Razorpay Key ID is not set in environment variables.");
        return;
    }

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response: any) {
        toast({
            variant: 'destructive',
            title: 'Payment Failed',
            description: `Error: ${response.error.description}`,
        });
        console.error("Razorpay Payment Failed:", response.error);
    });

    rzp1.open();
  }

  const donationType = form.watch('donationType');
  const amountOption = form.watch('amountOption');

  const getDonationImpactMessage = () => {
    const amount = amountOption === 'custom' ? Number(form.watch('customAmount')) : Number(amountOption);
    if(amount >= 5500) return "will support the enrolment of 5 girls";
    if(amount >= 2200) return "will support the enrolment of 2 girls";
    if(amount >= 1100) return "will support the enrolment of 1 girl";
    return "Every contribution makes a difference.";
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="one-time" className="w-full" onValueChange={(value) => form.setValue('donationType', value as 'one-time' | 'monthly')}>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="one-time">One Time</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <TabsContent value="one-time">
                <p className="text-sm font-semibold my-4 text-center">Select Donation Amount</p>
                <div className="grid grid-cols-4 gap-2">
                    {oneTimeAmounts.map(amount => (
                         <Button key={amount} type="button" variant={selectedAmount === amount ? 'default' : 'outline'} onClick={() => handleAmountClick(amount)}>₹{amount}</Button>
                    ))}
                    <Button type="button" variant={selectedAmount === 'custom' ? 'default' : 'outline'} onClick={() => handleAmountClick('custom')}>Other</Button>
                </div>
            </TabsContent>
             <TabsContent value="monthly">
                <p className="text-sm font-semibold my-4 text-center">Select Donation Amount</p>
                <div className="grid grid-cols-4 gap-2">
                    {monthlyAmounts.map(amount => (
                        <Button key={amount} type="button" variant={selectedAmount === amount ? 'default' : 'outline'} onClick={() => handleAmountClick(amount)}>₹{amount}</Button>
                    ))}
                    <Button type="button" variant={selectedAmount === 'custom' ? 'default' : 'outline'} onClick={() => handleAmountClick('custom')}>Other</Button>
                </div>
            </TabsContent>
        </Tabs>
        
        {selectedAmount === 'custom' && (
          <FormField
            control={form.control}
            name="customAmount"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="Enter custom amount" {...field} onChange={(e) => {
                      field.onChange(e);
                      form.setValue('amountOption', 'custom');
                  }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        
        <div className="text-center bg-secondary text-secondary-foreground p-2 rounded-md text-sm font-medium">
            {getDonationImpactMessage()}
        </div>
        
        <FormField
          control={form.control}
          name="citizen"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center space-x-4"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="indian" />
                      </FormControl>
                      <FormLabel className="font-normal">Indian Citizen</FormLabel>
                    </FormItem>
                     <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="foreign" />
                      </FormControl>
                      <FormLabel className="font-normal">Foreign Citizen</FormLabel>
                    </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="space-y-2">
             <FormField
                control={form.control}
                name="coverCharges"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>
                        I wish to bear the 3% payment Gateway charges.
                        </FormLabel>
                    </div>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="anonymous"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>
                        I don't want to be recognised on the website
                        </FormLabel>
                    </div>
                    </FormItem>
                )}
            />
        </div>


        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button type="submit" className="w-full" size="lg">
          Donate Now
        </Button>
      </form>
    </Form>
  );
}
