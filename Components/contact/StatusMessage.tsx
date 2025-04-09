import { motion } from "framer-motion";

interface StatusMessageProps {
  type: "success" | "error";
  message: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ type, message }) => {
  const styles = {
    success: "bg-green-50 border-green-100 text-green-600",
    error: "bg-red-50 border-red-100 text-red-600",
  };

  return (
    <motion.div
      className={`mt-4 p-3 border rounded-lg text-sm ${styles[type]}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {message}
    </motion.div>
  );
};

export default StatusMessage;