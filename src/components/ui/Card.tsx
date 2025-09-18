import React from 'react'
export const Card = ({ className='', children }: { className?: string; children: React.ReactNode }) => <div className={['card', className].join(' ')}>{children}</div>
export const CardHeader = ({ className='', children }: { className?: string; children: React.ReactNode }) => <div className={['card-header', className].join(' ')}>{children}</div>
export const CardTitle = ({ className='', children }: { className?: string; children: React.ReactNode }) => <h3 className={['card-title', className].join(' ')}>{children}</h3>
export const CardContent = ({ className='', children }: { className?: string; children: React.ReactNode }) => <div className={['card-content', className].join(' ')}>{children}</div>
export const CardFooter = ({ className='', children }: { className?: string; children: React.ReactNode }) => <div className={['card-footer', className].join(' ')}>{children}</div>