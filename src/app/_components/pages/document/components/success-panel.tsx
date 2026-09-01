"use client";

import { Button, Flex, Paper, Text } from "@pillar-ui/core";
import { Check, CircleRefresh, Copy, Whatsapp } from "@pillar-ui/icons";
import { useCallback, useEffect, useRef, useState } from "react";

type SuccessPanelProps = {
  title: string;
  description: string;
  previewLabel: string;
  message: string;
  whatsappUrl: string;
  openLabel: string;
  copyLabel: string;
  copiedLabel: string;
  newFormLabel: string;
  autoOpenBlocked: boolean;
  blockedLabel: string;
  onNewForm: () => void;
};

const SuccessPanel = ({
  title,
  description,
  previewLabel,
  message,
  whatsappUrl,
  openLabel,
  copyLabel,
  copiedLabel,
  newFormLabel,
  autoOpenBlocked,
  blockedLabel,
  onNewForm,
}: SuccessPanelProps) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard is unavailable (insecure context or denied permission) —
      // the message stays visible so it can be selected manually.
    }
  }, [message]);

  return (
    <Paper as="section" flow="5" p="5" corner="4" border className="doc-success" aria-live="polite">
      <Flex gap="4" items="center" className="doc-success__head">
        <span className="doc-success__icon" aria-hidden="true">
          <Check width="20" strokeWidth="2.5" />
        </span>
        <Paper flow="2">
          <Text as="p" size="5" weight="6">
            {title} / {title}
          </Text>
          <Text as="p" size="3" color="b" low>
            {description}
          </Text>
        </Paper>
      </Flex>

      {autoOpenBlocked && (
        <Paper p="4" corner="3" background="W4" className="doc-success__notice">
          <Text as="p" size="3">
            {blockedLabel}
          </Text>
        </Paper>
      )}

      <Button
        as="a"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="4"
        color="su"
        variant="solid"
        icon={<Whatsapp stroke="currentColor" />}
        className="doc-success__cta"
      >
        {openLabel}
      </Button>

      <Paper flow="3">
        <Text as="p" size="2" weight="6" transform="uppercase" color="b" low>
          {previewLabel}
        </Text>
        <pre className="doc-success__message">{message}</pre>
      </Paper>

      <Flex gap="3" wrap>
        <Button
          type="button"
          variant="soft"
          color="p"
          icon={copied ? <Check width="16" /> : <Copy width="16" />}
          onClick={handleCopy}
        >
          {copied ? copiedLabel : copyLabel}
        </Button>
        <Button
          type="button"
          variant="text"
          color="b"
          icon={<CircleRefresh width="16" />}
          onClick={onNewForm}
        >
          {newFormLabel}
        </Button>
      </Flex>
    </Paper>
  );
};

export default SuccessPanel;
