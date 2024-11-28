import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const GiveClassWork = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>Give Exercise</Button>
      </PopoverTrigger>

      <PopoverContent>
        
      </PopoverContent>
    </Popover>
  );
};

export default GiveClassWork;
