import React from 'react'

interface SDKProviderErrorProps {
  error: unknown;
}

export function SDKProviderError({ error }: SDKProviderErrorProps) {
  return (
    <div className='h-[100vh] w-full flex flex-col gap-[10px] items-center justify-center'>
      <p>Oops. Something went wrong.</p>
      <blockquote>
        <code>{error instanceof Error ? error.message : JSON.stringify(error)} Try to launch application via Telegram.</code>
      </blockquote>
    </div>
  );
}
