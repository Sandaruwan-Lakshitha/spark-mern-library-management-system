import React, { useState, useEffect } from "react";

import { Button, FlexRow, Select } from "../../../componets/CommonComponents";
import { Modal, DialogBox } from "../../../componets/Modal";
import Spinner from "../../../componets/Spinner";

import { getMembers } from "../../../api/memberAPI";
const LendDialog = ({ handleClose, show }) => {
   const [member, setMember] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [members, setMembers] = useState(null);

   const sendConfirm = () => {
      if (member !== "") {
         handleClose(true, member);
      } else {
         window.alert("Please select a member first.");
      }
   };

   const sendCancel = () => handleClose(false, null);

   useEffect(() => {
      setIsLoading(true);
      getMembers()
      .then((response)=>{
         if(!response.error){
            setMembers(response.data);
         }
      })
      .catch((error)=>{
         console.log(error);
      });
      setIsLoading(false);
   }, []);

   return (
      <Modal show={show}>
         <DialogBox>
            <h2>Lend Book</h2>
            <p>Select member to continue and confirm</p>
            {!isLoading && members !== null ? (
               <>
                  <Select
                     id="member-select"
                     onChange={(e) => setMember(e.target.value)}
                     value={member}
                  >
                     <option value="">--Please select a member--</option>
                     {members.map((member1, index) => {
                        return (
                           <option key={index} value={member1.id}>
                              {member1.firstName}
                           </option>
                        );
                     })}
                  </Select>
                  <FlexRow>
                     <Button onClick={sendConfirm}>Confirm</Button>
                     <Button onClick={sendCancel} color="secondary">
                        Cancel
                     </Button>
                  </FlexRow>
               </>
            ) : (
               <Spinner />
            )}
         </DialogBox>
      </Modal>
   );
};

export default LendDialog;
