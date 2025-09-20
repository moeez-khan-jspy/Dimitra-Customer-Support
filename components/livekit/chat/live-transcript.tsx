import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { type TextStreamData, useTranscriptions, useRoomContext } from '@livekit/components-react';
import { cn } from '@/lib/utils';

interface LiveTranscriptProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  /** milliseconds to keep the caption visible after the last update */
  hideDelayMs?: number;
}

export function LiveTranscript({ className, hideDelayMs = 1200, ...props }: LiveTranscriptProps) {
  const transcriptions: TextStreamData[] = useTranscriptions();
  const room = useRoomContext();

  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState('');
  const [activeStreamId, setActiveStreamId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (transcriptions.length === 0) return;

    const latest = transcriptions[transcriptions.length - 1];

    // Show only the newest transcript text; reset the hide timer on updates
    setText(latest.text);
    setActiveStreamId(latest.streamInfo.id);
    setVisible(true);

    const timeout = setTimeout(() => setVisible(false), hideDelayMs);
    return () => clearTimeout(timeout);
  }, [transcriptions, hideDelayMs]);

  const isLocal = React.useMemo(() => {
    if (!activeStreamId) return false;
    const last = transcriptions.find((t) => t.streamInfo.id === activeStreamId);
    return last ? last.participantInfo.identity === room.localParticipant.identity : false;
  }, [activeStreamId, transcriptions, room.localParticipant.identity]);

  return (
    <div className={cn('pointer-events-none flex w-full justify-center', className)} {...props}>
      <AnimatePresence>
        {visible && text && (
          <motion.div
            key={activeStreamId ?? 'caption'}
            initial={{ opacity: 0, translateY: 8 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'max-w-2xl rounded-full px-4 py-2 text-sm shadow-lg',
              'bg-black/80 text-white'
            )}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 