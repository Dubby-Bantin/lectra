"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
interface AlertDialogComponentProps {
  collectionRef: string;
  deleteDataRef: (collection: string, id: string) => Promise<void>;
  data: { id: string; name: string };
}
const AlertDialogComponent = ({
  collectionRef,
  deleteDataRef,
  data,
}: AlertDialogComponentProps) => {
  const handleDelete = async () => await deleteDataRef(collectionRef, data.id);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-red-500 hover:text-red-800 cursor-pointer mx-2">
        Delete: {data?.name}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            {data?.name} and remove {data?.name} from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-primary text-white hover:text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 text-white hover:text-white"
            onClick={handleDelete}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default AlertDialogComponent;
