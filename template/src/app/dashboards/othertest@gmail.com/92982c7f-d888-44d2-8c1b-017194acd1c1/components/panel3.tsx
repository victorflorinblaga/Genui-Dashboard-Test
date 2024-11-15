import { Textarea } from "@/components/ui/textarea";

const PanelXYZ = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Textarea placeholder="Write your notes here..." className="w-96" />
    </div>
  );
};

export default PanelXYZ;