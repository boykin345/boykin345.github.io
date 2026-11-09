import { useEffect, useState } from 'react';

const ApiTime = () => {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Yekaterinburg',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(time);

  if (!mounted) {
    return <div>Loading time...</div>;
  }

  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  );
};

export default ApiTime;
