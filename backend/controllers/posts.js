import dotenv from 'dotenv'
dotenv.config()
import Post from '../models/Post.js' 
import Organization from '../models/Organization.js'

export const getPosts = async(req,res)=>{
    try{
        console.log(req)
        const posts = await Post.find();

        res.status(200).json(posts);

    }catch(error){
        res.status(404).json({comment: "Problem in getPost method", msg: error.message})
    }
}

export const createPost = async(req, res)=>{
    // console.log("hello");
    try {
        // console.log("hii");
        const {orgId} = req.params;
        // console.log(orgId);

        const org = await Organization.findOne({_id: orgId});
        // console.log(org.name)
        if(!org) return res.status(403).json({message: "No valid org found"})

    
        const post = req.body;
        // console.log(post)
        const newPost = new Post({...post, organizationId: org._id, organization: org.name})
        // console.log(newPost)
        await newPost.save();

        return res.status(200).json({msg: "successful",newPost})
    } catch (error) {
        return res.status(500).json({msg: "something wrong in controller/posts.js",error})
    }
}

export const updatePost = async(req,res) =>{
    try {
        const {postId} = req.params;
        // console.log(postId)
        const changedPost = req.body;
        // console.log(changedPost)
        const existingPost = await Post.findOne({_id: postId});
        // console.log(existingPost)
        if(!existingPost) return res.status(403).json({message: "No post found"})

        const updatedPost = await Post.findByIdAndUpdate(postId, changedPost, { new: true});

        res.status(200).json({updatedPost})
        
    } catch (error) {
        return res.status(500).json({msg: "something wrong in controller/posts.js",error})
    }
}

export const deletePost = async(req, res) =>{
    try {
        const {postId} = req.params;
        console.log(postId)
        const existingPost = await Post.findOne({_id: postId});
        console.log(existingPost)
        if(!existingPost) return res.status(403).json({message: "No post found"})

        await Post.findByIdAndDelete(postId);
        
        // console.log('delete request')
        res.json({ message: 'post deleted successfully'});
    } catch (error) {
        return res.status(500).json({msg: "something wrong in controller/posts.js",error})
    }
}