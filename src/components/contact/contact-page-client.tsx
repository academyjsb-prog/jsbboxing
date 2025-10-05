
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';

const bankDetails = [
  { label: 'Account Name', value: 'JAISIDHBABA BOXING ACADEMY FEDERATION' },
  { label: 'Account Number', value: '50200065755352' },
  { label: 'Bank Name', value: 'HDFC Bank' },
  { label: 'Branch', value: 'Sector 18, Noida' },
  { label: 'IFSC Code', value: 'HDFC0000088' },
];

export default function ContactPageClient() {
  const { toast } = useToast();

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    toast({
      title: 'Copied to Clipboard',
      description: `${label} has been copied.`,
    });
  };

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 mx-auto text-base text-muted-foreground">
            We'd love to hear from you. Here's how you can reach us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className='font-headline'>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <p><strong>Address:</strong> C/O MR. ASHOK GATUM BUDH NAGAR , SADOPUR, Uttar Pradesh, India - 203207</p>
                        <p><strong>Email:</strong> info@jsbboxingacademy.org</p>
                        <p><strong>Phone:</strong> +91 98765 43210</p>
                        
                        <p className='font-bold pt-4'>Legal Information</p>
                        <p>Registered under [Society/Trust Act Name], Reg. No.: 12345</p>
                        <p>FCRA No.: XYZ/FCRA/6789</p>
                        <p>80G Tax Exemption: Available</p>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className='font-headline'>Bank Details for Donations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                        {bankDetails.map((detail) => (
                            <li key={detail.label} className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">{detail.label}</p>
                                <p className="text-muted-foreground">{detail.value}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleCopy(detail.value, detail.label)}
                            >
                                <Copy className="h-4 w-4" />
                            </Button>
                            </li>
                        ))}
                        </ul>
                         <div className="mt-6 text-center">
                            <p className="font-semibold">UPI ID / QR Code</p>
                            {/* Placeholder for QR Code */}
                            <div className="mt-2 flex justify-center">
                                 <div className="w-40 h-40 bg-muted rounded-lg flex items-center justify-center">
                                    <p className='text-sm text-muted-foreground'>QR Code</p>
                                 </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
