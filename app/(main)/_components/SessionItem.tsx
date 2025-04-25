import React from "react";
import { Loader, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parseUserAgent } from "@/lib/parse-useraent";

const SessionItem = (props: {
  loading?: boolean;
  userAgent: string;
  expiresAt: string;
  date: string;
  isCurrent?: boolean;
  onRemove?: () => void;
}) => {
  const { loading, userAgent, date, isCurrent = false, onRemove } = props;

  const { browser, icon: Icon, timeAgo, os } = parseUserAgent(userAgent, date);

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };
  return (
    <div className="w-full flex items-center ">
      <div
        className="shrink-0 mr-[16px] flex items-center justify-center
       w-[48px] h-[48px] rounded-full border dorder-[#eee] dark:border-[rgb(42,45,48)]"
      >
        <Icon />
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div className="flex-1">
          <h5 className="text-sm font-medium leading-1">
            {os} / {browser}
          </h5>
          <div className="flex items-center">
            {isCurrent ? (
              <div
                className="bg-green-500/80 h-[20px] px-2 w-[81px] 
              flex items-center justify-center text-xs text-white rounded-lg"
              >
                Active now
              </div>
            ) : (
              <span className="mr-[16px] text-[12px] text-muted-forground font-normal">
                {timeAgo}
              </span>
            )}
          </div>
        </div>

        {!isCurrent && (
          <Button
            disabled={loading}
            onClick={handleRemove}
            variant="ghost"
            size="icon"
          >
            {loading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <Trash2 size="29px" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SessionItem;
