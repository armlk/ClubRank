import { db } from "$lib/firebase";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { collection, query, where, orderBy, limit, type Query, getDocs } from "firebase/firestore";

export const load: PageServerLoad = async ({ url }) => {
    const search = url.searchParams.get("serach");
    const clubsCol = collection(db, "clubs");
    let q: Query;

    if (search) {
        q = query(
            clubsCol,
            where('name', '>=', search),
            where('name', '<=', search + '\uf8ff'),
            orderBy('name')
        );
    } else {
        q = query(clubsCol, orderBy("name"), limit(20));
    }

    const snapshot = await getDocs(q);
    const clubs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return { clubs, search }
}
