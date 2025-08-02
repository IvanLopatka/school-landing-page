import React from 'react';
import { FC } from 'react';

import { DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const DialogWindow: FC = () => {
  return (
    <DialogContent showCloseButton={false}>
      <div>
        <Input placeholder="What do you want to know?" />
        <Button
          type="reset"
          className="absolute top-6 right-5 shrink-0 border-none bg-transparent !shadow-none hover:bg-transparent"
        >
          <p className="text-black">X</p>
        </Button>
      </div>
    </DialogContent>
  );
};
