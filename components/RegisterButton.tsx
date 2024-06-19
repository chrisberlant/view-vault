import { Button, buttonVariants } from '@/components/ui/Button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import Link from 'next/link';

export default function RegisterButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='default' className='mb-8'>
					Create an account
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Create an account</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when
						you&lsquo;re done.
					</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							Name
						</Label>
						<Input
							id='name'
							defaultValue='Pedro Duarte'
							className='col-span-3'
						/>
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='username' className='text-right'>
							Username
						</Label>
						<Input
							id='username'
							defaultValue='@peduarte'
							className='col-span-3'
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type='submit'>Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
