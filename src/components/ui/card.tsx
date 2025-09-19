import * as React from 'react'

export const Card = ({ className = '', children }: any) =>
  <div className={['card', className].join(' ')}>{children}</div>
export const CardHeader = ({ className = '', children }: any) =>
  <div className={['card-header', className].join(' ')}>{children}</div>
export const CardTitle = ({ className = '', children }: any) =>
  <h3 className={['card-title', className].join(' ')}>{children}</h3>
export const CardContent = ({ className = '', children }: any) =>
  <div className={['card-content', className].join(' ')}>{children}</div>
export const CardFooter = ({ className = '', children }: any) =>
  <div className={['card-footer', className].join(' ')}>{children}</div>
