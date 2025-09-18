
import * as React from 'react'
import { cn } from '../utils'
export const Card = ({ className='', children }: { className?: string; children: React.ReactNode }) => <div className={cn('card', className)}>{children}</div>
export const CardHeader = ({ className='', children }: { className?: string; children: React.ReactNode }) => <div className={cn('card-header', className)}>{children}</div>
export const CardTitle = ({ className='', children }: { className?: string; children: React.ReactNode }) => <h3 className={cn('card-title', className)}>{children}</h3>
export const CardContent = ({ className='', children }: { className?: string; children: React.ReactNode }) => <div className={cn('card-content', className)}>{children}</div>
export const CardFooter = ({ className='', children }: { className?: string; children: React.ReactNode }) => <div className={cn('card-footer', className)}>{children}</div>
