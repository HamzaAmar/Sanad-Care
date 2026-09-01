"use client";

import { Text } from "@pillar-ui/core";

type QuestionCardProps = {
  index: number;
  question: string;
  yesLabel: string;
  noLabel: string;
  hasError: boolean;
  errorLabel: string;
};

/**
 * One health question rendered as a yes / no segmented control.
 *
 * Built from real radio inputs (visually hidden via `H-sr`) so keyboard
 * navigation, `FormData` and native validation all keep working. The selected
 * pill is styled in CSS through the `:checked + label` sibling selector, and
 * grouping is handled by `fieldset` + `legend` so screen readers announce the
 * question as the group name instead of repeating it.
 */
const QuestionCard = ({
  index,
  question,
  yesLabel,
  noLabel,
  hasError,
  errorLabel,
}: QuestionCardProps) => {
  const errorId = `document-question-error-${index}`;

  return (
    <fieldset
      className={`doc-question${hasError ? " doc-question--error" : ""}`}
      aria-describedby={hasError ? errorId : undefined}
    >
      <legend className="H-sr">{question}</legend>
      <input type="hidden" name={`q-label-${index}`} value={question} />

      <div className="doc-question__body">
        <span className="doc-question__index" aria-hidden="true">
          {index + 1}
        </span>
        {/* Duplicate of the legend, so it is hidden from assistive tech. */}
        <Text as="p" size="4" weight="4" className="doc-question__text" aria-hidden="true">
          {question}
        </Text>
      </div>

      <div className="doc-question__answers">
        {(["yes", "no"] as const).map((value) => {
          const inputId = `q-${index}-${value}`;

          return (
            <label key={value} htmlFor={inputId} className="doc-answer">
              <input
                type="radio"
                id={inputId}
                name={`q-${index}`}
                value={value}
                className="H-sr doc-answer__input"
                required
              />
              <span className="doc-answer__label">{value === "yes" ? yesLabel : noLabel}</span>
            </label>
          );
        })}
      </div>

      {hasError && (
        <Text as="p" size="2" color="d" id={errorId} className="doc-question__error">
          {errorLabel}
        </Text>
      )}
    </fieldset>
  );
};

export default QuestionCard;
