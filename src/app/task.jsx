"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    CustomModal,
    CNMoadlContent,
    CNMoadlText,
    CNMoadlHeader,
} from '@/components/ui/modal';
import { useState } from "react";
import { Button } from "@/components/ui/button"
import useConfirm from "@/components/ui/confirm"
import AddCrud from "@/components/pages/addCrud";
import { Edit, PlusCircle, Trash } from "lucide-react";
import EditCrud from "@/components/pages/editCrud";
import "react-confirm-alert/src/react-confirm-alert.css";

export function TableDemo() {

    // useStates
    const [list, setList] = useState(JSON.parse(sessionStorage.getItem("userList")) || [])
    const [editData, setEditdata] = useState({});
    const [Dialog, confirmDelete] = useConfirm()

    // Modals
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)
    const [openEdit, setOpenEdit] = useState(false);
    const toggleEdit = (item) => {
        setEditdata(item)
        setOpenEdit(!openEdit)
    }

    // Crud func.
    const handleAddobj = async (item) => {
        setList([...list, item])
        sessionStorage.setItem("userList", JSON.stringify([...list, item]))
    }

    const handleDelete = async (id) => {
        const ans = await confirmDelete()
        if (ans) {
            let newArr = list.filter((x) => x.id !== id)
            setList([...newArr]);
            sessionStorage.setItem("userList", JSON.stringify([...newArr]))
        }
    }

    const handleEdit = (item) => {
        var Index = list.findIndex(x => x.id === item.id);
        list[Index] = item;
        sessionStorage.setItem("userList", JSON.stringify(list))
    }

    return (
        <section>
            <div className="flex justify-end">
                <Button onClick={toggle}><PlusCircle size={18} className="mr-2" /> Add User</Button>
            </div>
            <Dialog />

            {list.length > 0 ?
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[90px] text-center">S.NO</TableHead>
                            <TableHead>User Name</TableHead>
                            <TableHead>E-mail</TableHead>
                            <TableHead>Linkedin URL</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list.map((n, i) => (
                            <TableRow key={i}>
                                <TableCell className="text-center">{i + 1}</TableCell>
                                <TableCell className="text-[13px]">{n.name}</TableCell>
                                <TableCell className="text-[13px]">{n.email}</TableCell>
                                <TableCell className="text-[13px]">{n.linkedin}</TableCell>
                                <TableCell className="text-[13px]">{n.gender}</TableCell>
                                <TableCell className="text-[13px]">
                                    <div className="text-sm text-muted-foreground whitespace-break-spaces">
                                        <p>{n.address1}</p>
                                        <p>{n.address2}, {n.city}</p>
                                        <p>{n.state}-{n.pincode}</p>
                                    </div>
                                </TableCell>
                                <TableCell className="text-[13px]">
                                    <div className="flex gap-8">
                                        <button className="border-none" onClick={() => toggleEdit(n)}>
                                            <Edit size={18} />
                                        </button>

                                        <button className="border-none" onClick={() => handleDelete(n.id)}>
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                :
                <div className="flex justify-center items-center min-h-[80vh]">
                    No data found
                </div>
            }
            <CustomModal open={open} className='mdl min-w-[70vw]'>
                <CNMoadlHeader toggle={toggle}>
                    <p className='text-2xl font-bold uppercase'>Add User</p>
                    <CNMoadlText>Fill user details to add.</CNMoadlText>
                </CNMoadlHeader>
                <CNMoadlContent>
                    <AddCrud handleAddobj={handleAddobj} toggle={toggle} />
                </CNMoadlContent>
            </CustomModal>

            <CustomModal open={openEdit} className='mdl min-w-[70vw]'>
                <CNMoadlHeader toggle={toggleEdit}>
                    <p className='text-2xl font-bold uppercase'>Edit User</p>
                    <CNMoadlText>Edit user details here.</CNMoadlText>
                </CNMoadlHeader>
                <CNMoadlContent>
                    <EditCrud handleAddobj={handleEdit} toggleEdit={toggleEdit} data={editData} />
                </CNMoadlContent>
            </CustomModal>
        </section>
    )
}
