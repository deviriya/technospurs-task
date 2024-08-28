import { FormControl, Grid, MenuItem, Select, Switch } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { yupResolver } from '@hookform/resolvers/yup';
import { Linkedin, Locate, Mail, User } from 'lucide-react';
import CityList from '../../lib/city.json'
import { defaultValues, schema } from './schema';


function AddCrud({ handleAddobj, toggle }) {

    const { handleSubmit, reset, control, formState: { errors }, watch } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
        defaultValues: defaultValues
    })

    const watchFields = watch("state")
    const filterState = CityList.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.state === value.state
        ))
    )
    const filterCity = CityList.filter((item) => item.state === watchFields)

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
                            <FormControl size='small' fullWidth>
                                <Select
                                    {...field}
                                    labelId="demo-simple-select-label"
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                    <MenuItem value="Not to specify">Not to specify</MenuItem>
                                </Select>
                            </FormControl>
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
                            <FormControl size='small' fullWidth>
                                <Select
                                    {...field}
                                    labelId="demo-simple-select-label"
                                >
                                    {filterState.map((n, i) => (
                                        <MenuItem value={n.state} key={i}>{n.state}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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
                            <FormControl size='small' fullWidth>
                                <Select
                                    {...field}
                                    labelId="demo-simple-select-label"
                                >
                                    {filterCity.map((n, i) => (
                                        <MenuItem value={n.name} key={i}>{n.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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
                                    type="text"
                                    maxLength={6}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter pincode"
                                    onChange={e => {
                                        const pincode = e.target.value.replace(/[^0-9]/g, "");
                                        field.onChange(pincode)
                                    }}
                                />
                            )}
                        />
                    </div>
                    {errors.pincode && <p className='text-[#d32f2f] text-sm'>* {errors.pincode?.message}</p>}
                </Grid>
            </Grid>

            <div className='flex justify-center my-3'>
                <Button>Submit</Button>
            </div>
        </form>
    )
}

export default AddCrud