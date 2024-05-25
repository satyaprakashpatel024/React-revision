/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
	client = new Client();
	databases;
	bucket;
	constructor() {
		this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
		this.account = new Account(this.client);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			return this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
				title,
				content,
				featuredImage,
				status,
				userId,
			});
		} catch (error) {
			console.log(error);
		}
	}

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            const res = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost error ",error);
            throw error;
        }
        return false;
    }

    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId, // database id
                conf.appwriteCollectionId, // collection id
                slug, // blog id
            );
        } catch (error) {
            console.log("Appwrite error");
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            const result = await this.databases.listDocuments(
                conf.appwriteDatabaseId, // databaseId
                conf.appwriteCollectionId, // collectionId
                queries // queries (optional)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    // file upload 
    async uploadFile(file){
        try {
            const promise = this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return promise;
        } catch (error) {
            console.log("Appwrite error :: upload file error",error);
        }
    }

    // delete file
    async deleteFile(fileId){
        try {
            const promise = await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite error :: delete file error",error);
        }
    }

    // prev file
    async getFilePreview(fileId){
        try {
            const promise = await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
            return promise;
        } catch (error) {
            console.log("Appwrite error :: preview file error",error);
        }
    }
}

const service = new Service();

export default service;
