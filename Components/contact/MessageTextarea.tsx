import React from "react";

interface MessageTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isValid: boolean;
  errorMessage?: string;
}

const MessageTextarea: React.FC<MessageTextareaProps> = ({
  value,
  onChange,
  isValid,
  errorMessage = "Message must be at least 5 words long",
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Your Message
      </label>
      <textarea
        rows={5}
        className={`w-full px-3 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565FA1] focus:border-transparent transition-all resize-none ${
          value.trim() !== "" && !isValid
            ? "border-red-300"
            : "border-gray-200"
        }`}
        name="user_message"
        placeholder="I'd like to discuss a project..."
        required
        value={value}
        onChange={onChange}
      />
      {value.trim() !== "" && !isValid && (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default MessageTextarea;