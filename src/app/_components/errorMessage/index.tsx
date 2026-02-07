import { Alert } from "@pillar-ui/core";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <Alert role="alert" title="Error occurred" message={message} />;
}
