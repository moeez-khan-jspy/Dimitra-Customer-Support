import { headers } from 'next/headers';
import { getAppConfig } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const hdrs = await headers();
  const { companyName, logo, logoDark } = await getAppConfig(hdrs);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex w-full flex-row items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://livekit.io"
            className="scale-100 transition-transform duration-300 hover:scale-110"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={`${companyName} Logo`}
              className="block h-8 w-auto md:h-10 dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoDark ?? logo}
              alt={`${companyName} Logo`}
              className="hidden h-8 w-auto md:h-10 dark:block"
            />
          </a>
        </div>
      </header>
      {children}
    </>
  );
}
