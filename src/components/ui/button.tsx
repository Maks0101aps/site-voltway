import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
export const buttonVariants = cva('inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:pointer-events-none disabled:opacity-50', { variants: { variant: { default: 'bg-white text-slate-950 shadow-[0_0_30px_rgba(255,255,255,.2)] hover:bg-cyan-100 hover:shadow-[0_0_42px_rgba(14,165,255,.35)]', outline: 'border border-white/20 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-white/10' }, size: { default: 'h-12 px-6', lg: 'h-14 px-8 text-base' } }, defaultVariants: { variant:'default', size:'default' } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, ...props}, ref)=><button ref={ref} className={cn(buttonVariants({variant,size,className}))} {...props}/>);
Button.displayName='Button';
