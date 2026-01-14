import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return {
    mutate: (data: any, options?: any) => {
      // Static mock submission
      console.log("Mock inquiry submission:", data);
      toast({
        title: "Inquiry Sent",
        description: "We'll get back to you shortly with a quote.",
      });
      if (options?.onSuccess) options.onSuccess();
    },
    isPending: false
  };
}
