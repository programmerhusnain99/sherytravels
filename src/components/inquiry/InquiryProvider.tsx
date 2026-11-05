"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { InquiryModal } from "./InquiryModal";

interface InquiryContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

/** Open/close the site-wide inquiry modal from any client component. */
export function useInquiry(): InquiryContextValue {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within <InquiryProvider>");
  return ctx;
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <InquiryModal isOpen={isOpen} onClose={close} />
    </InquiryContext.Provider>
  );
}
