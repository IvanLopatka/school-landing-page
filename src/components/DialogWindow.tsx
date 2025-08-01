import React from 'react';
import { FC } from 'react';

import { DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export const DialogWindow: FC = () => {
  return (
    <DialogContent showCloseButton={false}>
      <div>
        <Input placeholder="Search" />
      </div>
    </DialogContent>
  );
};
