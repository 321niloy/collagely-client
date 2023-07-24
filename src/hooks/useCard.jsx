import { useQuery } from "@tanstack/react-query";

const useCard = () => {
    const { data: collegeCards = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['collages'],
        queryFn: async () => {
            const res = await fetch('https://collagely-server.vercel.app/collages');
            return res.json();
        }
    })

    return [collegeCards, loading, refetch]
};

export default useCard;