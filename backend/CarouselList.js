import mongoose from "mongoose";

const carouselSchema = mongoose.Schema({
img_url:String,
pathname:String,
gendercoll:String,
categorycoll:String
})

const CarouselList = mongoose.model("Carousels", carouselSchema)

export default CarouselList
