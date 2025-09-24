'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Landmark, Wallet } from 'lucide-react';
import { useEffect } from 'react';

const donationAmounts = ['100', '500', '1000'];

const donationSchema = z.object({
  amountOption: z.string(),
  customAmount: z.string().optional(),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  paymentMethod: z.string(),
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

export default function DonationForm({ suggestedAmount }: DonationFormProps) {
  const { toast } = useToast();
  
  const allAmounts = suggestedAmount ? [...new Set([suggestedAmount.toString(), ...donationAmounts])].sort((a, b) => +a - +b) : donationAmounts;

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amountOption: suggestedAmount?.toString() || '500',
      name: '',
      email: '',
      paymentMethod: 'upi',
    },
  });

  useEffect(() => {
    if (suggestedAmount) {
        form.setValue('amountOption', suggestedAmount.toString());
    }
  }, [suggestedAmount, form]);

  function onSubmit(data: DonationFormValues) {
    const finalAmount = data.amountOption === 'custom' ? data.customAmount : data.amountOption;
    toast({
      title: 'Donation Submitted!',
      description: `Thank you, ${data.name}! Your donation of ₹${finalAmount} is being processed via ${data.paymentMethod}.`,
    });
    console.log({ ...data, finalAmount });
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <FormControl>
                <Tabs defaultValue={field.value} onValueChange={field.onChange} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="upi"><Wallet className="mr-2 h-4 w-4" />UPI</TabsTrigger>
                    <TabsTrigger value="card"><CreditCard className="mr-2 h-4 w-4" />Card</TabsTrigger>
                    <TabsTrigger value="netbanking"><Landmark className="mr-2 h-4 w-4" />Banking</TabsTrigger>
                  </TabsList>
                </Tabs>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" size="lg">
          Donate Securely
        </Button>
      </form>
    </Form>
  );
}
