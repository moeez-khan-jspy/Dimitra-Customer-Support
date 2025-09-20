import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WelcomeProps {
  disabled: boolean;
  startButtonText: string;
  onStartCall: () => void;
}

export const Welcome = ({
  disabled,
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeProps) => {
  return (
    <section
      ref={ref}
      inert={disabled}
      className={cn(
        'fixed inset-0 mx-auto flex h-svh flex-col items-center justify-center text-center bg-cover bg-center',
        disabled ? 'z-10' : 'z-20'
      )}
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dimitralogo2023.svg"
        alt="DIMITRA"
        className="mb-6 h-14 w-auto md:h-20"
      />

      <h1 className="text-foreground text-4xl font-extrabold tracking-tight md:text-5xl">
        Customer Support
      </h1>
      <p className="text-fg1 mx-auto mt-4 max-w-xl text-balance leading-6 font-medium">
        Get instant answers, troubleshoot issues, or learn more about our products. Our AI is
        here to provide you with a seamless support experience.
      </p>
      <Button variant="primary" size="lg" onClick={onStartCall} className="mt-8 w-64 font-mono">
        {startButtonText}
      </Button>
    </section>
  );
};
