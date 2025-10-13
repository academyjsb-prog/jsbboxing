'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useDonation } from '@/context/donation-context';

const donationAmounts = ['100', '500', '1000'];

const donationSchema = z.object({
  amountOption: z.string(),
  customAmount: z.string().optional(),
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

interface DonationFormProps {
    suggestedAmount?: number;
}

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function DonationForm({ suggestedAmount }: DonationFormProps) {
  const { toast } = useToast();
  const { setIsOpen } = useDonation();
  
  const allAmounts = suggestedAmount ? [...new Set([suggestedAmount.toString(), ...donationAmounts])].sort((a, b) => +a - +b) : donationAmounts;

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amountOption: suggestedAmount?.toString() || '500',
      name: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (suggestedAmount) {
        form.setValue('amountOption', suggestedAmount.toString());
    }
  }, [suggestedAmount, form]);

  function onSubmit(data: DonationFormValues) {
    const finalAmount = data.amountOption === 'custom' ? data.customAmount : data.amountOption;
    if (!finalAmount) return;

    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: Number(finalAmount) * 100, // Amount in paise
        currency: "INR",
        name: "JSB Boxing Academy",
        description: "Donation to support young fighters",
        image: "https://ik.imagekit.io/nb6cfzd7m/logo.png", // A URL to your logo
        handler: function (response: any) {
            toast({
              title: "Payment Successful!",
              description: `Thank you, ${data.name}, for your generous donation of ₹${finalAmount}.`,
            });
            console.log("Razorpay Response:", response);
            setIsOpen(false);
        },
        prefill: {
            name: data.name,
            email: data.email,
            contact: data.phone,
        },
        notes: {
            address: "JSB Boxing Academy, Sadopur, Uttar Pradesh"
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="amountOption"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-semibold">Select Amount (INR)</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-4"
                >
                  {allAmounts.map(amount => (
                    <FormItem key={amount} className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={amount} />
                      </FormControl>
                      <FormLabel className="font-normal">₹{amount}</FormLabel>
                    </FormItem>
                  ))}
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="custom" />
                    </FormControl>
                    <FormLabel className="font-normal">Custom</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch('amountOption') === 'custom' && (
          <FormField
            control={form.control}
            name="customAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Custom Amount (INR)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
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
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Your 10-digit phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button type="submit" className="w-full" size="lg">
          Proceed to Pay
        </Button>
      </form>
    </Form>
  );
}
