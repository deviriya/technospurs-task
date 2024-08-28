import { Grid, Switch } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { yupResolver } from '@hookform/resolvers/yup';
import { Linkedin, Locate, Mail, User } from 'lucide-react';
import StateList from '../../lib/state.json'
import CityList from '../../lib/city.json'
import { schema } from './schema';


function AddCrud({ handleAddobj, toggle }) {

    const defaultValues = {
        name: "",
        email: "",
        linkedin: "",
        gender: null,
        address1: "",
        address2: "",
        state: "",
        city: "",
        pincode: "",
        edit: true
    }

    const { handleSubmit, reset, control, formState: { errors, isValid, isDirty }, getValues, watch } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: defaultValues
    })

    const watchFields=watch("state")

    console.log(Object.keys(CityList))

    const onSubmit = (data) => {
        data["id"] = parseInt(Math.random() * 1000);
        handleAddobj(data)
        toggle();
        reset(defaultValues)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='max-h-[70vh] overflow-auto'>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">User Name</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <User size={20} />
                        </div>
                        <Controller
                            control={control}
                            name='name'
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter user name"
                                />
                            )}
                        />
                    </div>
                    {errors.name && <p className='text-[#d32f2f] text-sm'>* {errors.name?.message}</p>}
                </Grid>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">E-mail</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Mail size={20} />
                        </div>
                        <Controller
                            control={control}
                            name='email'
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter e-mail"
                                />
                            )}
                        />
                    </div>
                    {errors.email && <p className='text-[#d32f2f] text-sm'>* {errors.email?.message}</p>}
                </Grid>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">Linkedin URL</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Linkedin size={18} />
                        </div>
                        <Controller
                            control={control}
                            name='linkedin'
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter user name"
                                />
                            )}
                        />
                    </div>
                    {errors.linkedin && <p className='text-[#d32f2f] text-sm'>* {errors.linkedin?.message}</p>}
                </Grid>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">Gender</label>
                    <Controller
                        control={control}
                        name='gender'
                        render={({ field }) => (
                            <select {...field}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not to specify">Not to specify</option>
                            </select>
                        )}
                    />
                    {errors.gender && <p className='text-[#d32f2f] text-sm'>* {errors.gender?.message}</p>}
                </Grid>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">Address 1</label>
                    <div className="w-full">
                        <Controller
                            control={control}
                            name='address1'
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter user name"
                                />
                            )}
                        />
                    </div>
                    {errors.address1 && <p className='text-[#d32f2f] text-sm'>* {errors.address1?.message}</p>}
                </Grid>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">Address 2</label>
                    <div className="w-full">
                        <Controller
                            control={control}
                            name='address2'
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter user name"
                                />
                            )}
                        />
                    </div>
                    {errors.address2 && <p className='text-[#d32f2f] text-sm'>* {errors.address2?.message}</p>}
                </Grid>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">State</label>
                    <Controller
                        control={control}
                        name='state'
                        render={({ field }) => (
                            <select {...field}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option></option>
                                {StateList.map((n, i) => (
                                    <option value={n} key={i}>{n}</option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.state && <p className='text-[#d32f2f] text-sm'>* {errors.state?.message}</p>}
                </Grid>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">City</label>
                    <Controller
                        control={control}
                        name='city'
                        render={({ field }) => (
                            <select {...field}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option></option>
                                <option value={"test"}>test</option>
                                {/* {CityList.map((n, i) =>(
                                    <option value={n} key={i}>{n}</option>
                                ))} */}
                            </select>
                        )}
                    />
                    {errors.city && <p className='text-[#d32f2f] text-sm'>* {errors.city?.message}</p>}
                </Grid>

                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">Pincode</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Locate size={20} />
                        </div>
                        <Controller
                            control={control}
                            name='pincode'
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="number"
                                    maxLength={6}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter pincode"
                                />
                            )}
                        />
                    </div>
                    {errors.pincode && <p className='text-[#d32f2f] text-sm'>* {errors.pincode?.message}</p>}
                </Grid>
                <Grid item md={6}>
                    <label className="text-foreground text-sm mb-2">Editable</label>
                    <div className=''>
                        <Controller
                            control={control}
                            name='edit'
                            render={({ field }) => (
                                <Switch {...field} defaultChecked={field.value} />
                            )}
                        />
                    </div>

                </Grid>
            </Grid>

            <div className='flex justify-center my-3'>
                <Button>Submit</Button>
            </div>
        </form>
    )
}

export default AddCrud