import AddDocumentBtn from "@/components/lectures/AddDocumentBtn";
import { getFireStoreRefData } from "@/lib/utils";
import React from "react";

const Lectures = async ({ params }: { params: { id: string } }) => {
  const data = await getFireStoreRefData(params.id, "instructors");
  if (!data) return;
  const { id, email } = data;
  // log({ id, email });
  const documents = [];
  return (
    <>
      {documents.length > 0 ? (
        <div className=""></div>
      ) : (
        <div className="">
          <AddDocumentBtn userId={id} email={email} />
        </div>
      )}
    </>
  );
};

export default Lectures;
