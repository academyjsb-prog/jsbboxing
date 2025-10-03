
'use client';

import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface ImageUploaderProps {
  onUploadSuccess: () => void;
}

export default function ImageUploader({ onUploadSuccess }: ImageUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        variant: 'destructive',
        title: 'No file selected',
        description: 'Please select an image file to upload.',
      });
      return;
    }

    setIsUploading(true);
    try {
      const fileName = `${new Date().getTime()}-${file.name}`;
      const storageRef = ref(storage, `gallery/${fileName}`);
      await uploadBytes(storageRef, file);
      
      toast({
        title: 'Upload successful!',
        description: 'Your image has been added to the gallery.',
      });
      
      setFile(null); // Reset file input
      onUploadSuccess(); // Refresh the gallery
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        variant: 'destructive',
        title: 'Upload failed',
        description: 'There was a problem uploading your image. Please try again.',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto">
        <CardHeader>
            <CardTitle className="font-headline">Upload New Image</CardTitle>
            <CardDescription>Add a new photo to the gallery.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col sm:flex-row items-center gap-4">
            <Input type="file" onChange={handleFileChange} accept="image/*" className="flex-grow" />
            <Button onClick={handleUpload} disabled={isUploading || !file} className="w-full sm:w-auto">
                {isUploading ? (
                <Loader2 className="animate-spin" />
                ) : (
                <Upload />
                )}
                <span className="ml-2">Upload</span>
            </Button>
            </div>
      </CardContent>
    </Card>
  );
}
