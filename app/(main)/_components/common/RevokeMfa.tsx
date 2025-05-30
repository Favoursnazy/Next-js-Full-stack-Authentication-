import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { revokeMFAMutationFn } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import React, { useCallback } from "react";

const RevokeMfa = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: revokeMFAMutationFn,
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({
        queryKey: ["authUser"],
      });
      toast({
        title: "Success",
        description: response?.message,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.message,
        variant: "destructive",
      });
    },
  });

  const handleRevokeMfa = useCallback(() => {
    mutate();
  }, []);
  return (
    <Button
      onClick={handleRevokeMfa}
      disabled={isPending}
      className="h-[35px] !text-[#c40006d3] !bg-red-100 shadow-none mr-1"
    >
      {isPending && <Loader className="animate-spin" />} Revoke Access
    </Button>
  );
};

export default RevokeMfa;
