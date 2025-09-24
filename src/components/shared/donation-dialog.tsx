'use client';

import { useEffect, useState } from 'react';
import { useDonation } from '@/context/donation-context';
import { personalizedDonationPrompt, PersonalizedDonationPromptOutput } from '@/ai/flows/personalized-donation-prompt';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import DonationForm from './donation-form';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';

export default function DonationDialog() {
  const { isOpen, setIsOpen } = useDonation();
  const [suggestion, setSuggestion] = useState<PersonalizedDonationPromptOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isOpen) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const getSuggestion = async () => {
        setIsLoading(true);
        setError(null);
        setSuggestion(null);
        try {
          // Pass the time spent so far, but don't re-run this effect when it changes.
          const result = await personalizedDonationPrompt({
            timeSpent,
            pagesViewed: 1, // Simplified for this example
          });
          setSuggestion(result);
        } catch (e) {
          console.error(e);
          setError('Could not get a personalized suggestion. Please choose an amount.');
        } finally {
          setIsLoading(false);
        }
      };
      getSuggestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Support Our Fighters</DialogTitle>
          <DialogDescription>
            Your generosity fuels their dreams and builds a stronger community.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="p-4 border rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                <p className="text-sm font-medium">Getting a personal suggestion...</p>
              </div>
              <Skeleton className="h-4 w-3/4 mt-2" />
            </div>
          )}
          {error && <p className="text-sm text-destructive">{error}</p>}
          {suggestion && (
            <div className="p-4 border-2 border-primary rounded-lg bg-primary/10 transition-all duration-500">
              <p className="text-sm font-semibold text-primary">Personalized Suggestion for You:</p>
              <p className="text-lg font-bold">₹{suggestion.donationAmount}</p>
              <p className="text-sm text-muted-foreground">{suggestion.reason}</p>
            </div>
          )}
          <DonationForm suggestedAmount={suggestion?.donationAmount} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
