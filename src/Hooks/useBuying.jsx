// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const Usebuying = () => {
    const axiosSecure = useAxiosSecure();

    const { data: buying = [], isPending: loading, refetch } = useQuery({
        queryKey: ['buying'], 
        queryFn: async () => {
            const res = await axiosSecure.get('/buying');
            return res.data;
        }
    });

    return [buying, loading, refetch];
}

export default Usebuying;
