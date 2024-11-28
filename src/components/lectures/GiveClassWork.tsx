import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const GiveClassWork = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Give Exercise</Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg"></DialogContent>
    </Dialog>
  );
};

export default GiveClassWork;
