import {
    CustomModal,
    CNMoadlContent,
    CNMoadlText,
    CNMoadlHeader,
} from '@/components/ui/modal';
import { Button } from "@/components/ui/button"
import { useState } from 'react';

function useConfirm() {
    const [promise, setPromise] = useState(null);

    const confirm = () => new Promise((resolve, reject) => {
        setPromise({ resolve });
    });

    const handleClose = () => {
        setPromise(null);
    };

    const handleConfirm = () => {
        promise?.resolve(true);
        handleClose();
    };

    const handleCancel = () => {
        promise?.resolve(false);
        handleClose();
    };
    // You could replace the Dialog with your library's version
    const ConfirmationDialog = () => (
        <CustomModal open={promise !== null}>
            <CNMoadlHeader>
                <p className='text-2xl font-bold uppercase'>Are you sure?</p>
                <CNMoadlText>Do you want to delete this user permanently?.</CNMoadlText>
            </CNMoadlHeader>
            <CNMoadlContent>
                <div className='flex justify-end gap-4'>
                    <button onClick={handleCancel}>No</button>
                    <Button onClick={handleConfirm}>Yes</Button>
                </div>
            </CNMoadlContent>
        </CustomModal>
    );
    return [ConfirmationDialog, confirm];
}

export default useConfirm;
