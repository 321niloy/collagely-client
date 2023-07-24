import { useQuery } from "@tanstack/react-query";

const useCard = () => {
    const { data: collegeCards = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['collages'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/collages');
            return res.json();
        }
    })

    return [collegeCards, loading, refetch]
};

export default useCard;