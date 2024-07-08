export type ChatMessage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  timestamp: Date | null;
  sender: string | null;
};
