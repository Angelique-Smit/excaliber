import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import sus from '../images/among-us-sus.gif'
import spongebob from '../images/patrick.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    amongUs: new ImageSource(sus),
    patrick: new ImageSource(spongebob)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.amongUs, Resources.patrick])

export { Resources, ResourceLoader }