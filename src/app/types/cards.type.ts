
export interface ICard {



    id: number,
    name:string,

    image:string,
    muscleGroups:string,
    equipment:string,
    difficulty:string,
    duration:number,
    caloriesBurned:number,
    sets:number,
    reps:number,

    rating:number,
    description:string,
    instructions: string,
}
export interface IcardDetails {
    params: Promise<{
        id: string
        card: string
    }>;
}