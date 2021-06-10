import PagingUtil from "../../lib/paging-util";
import { getSortedPostsData } from "../../lib/posts";

export default async function handler(req, res) {
    const { page } = req.query

    const posts = await getSortedPostsData();
    const util = new PagingUtil(page, posts)
    res.status(200).json(util.result)
}