<template>
    <div class="group">
        <div class="card4-box">
            <div id="Hegel" class="card4">
                <div class="content">
                    <p class="some">
                    </p>
                </div>
                <div class="thumb">
                    <slot name="cardImg"></slot>
                </div>
                <div class="detial">
                    <div class="title">
                        <slot name="cardHeader"></slot>
                    </div>
                    <div class="level">
                        <slot name="cardBody"></slot>
                        <svg viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                        </svg>
                        <svg viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                        </svg>
                        <svg viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                        </svg>
                        <svg viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                        </svg>
                        <svg viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                            </path>
                        </svg>
                    </div>
                    <div class="action">
                            <svg class="mode hide" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                </path>
                            </svg>
                            <svg class="mode hide" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z">
                                </path>
                            </svg>
                            <svg class="mode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z">
                                </path>
                            </svg>
                            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16"
                                xmlns="http://www.w3.org/2000/svg" class="mode">
                                <path
                                    d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z">
                                </path>
                            </svg>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardView'
}
</script>

<style>
.card4 {
    margin-top: 50px;
    --card4-width: 20em;
    --primer-color: hsl(241, 100%, 70%);
    --text-color: hsl(0, 0%, 100%);
    --text-color-L2: hsl(0, 0%, 60%);
    --transition: all 0.5s cubic-bezier(0.13, 0.78, 0.3, 0.99);
    background: hsl(0, 0%, 10%);
    font-size: 12px;
    line-height: 2;
    width: 400px;
    border-radius: 20px;
    padding-bottom: 0.5em;
    margin-bottom: 2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.7s ease-in;
    background-image: url(https://i.ibb.co/JdZYrqr/background-2426328-640-1.webp);

}

.row>* {
    width: 430px;
}
.detial {
    width: 400px;
    padding: 01em 1em;
    color: var(--text-color);
    transition: all 0.7s ease-in;
    text-align: center;
}

.name {
    font-size: 2em;
    font-weight: bold;
}

.title {
    align-items: center;
    justify-content: space-between;
    margin: 0.5em 0;
}

.content {
    color: var(--text-color);
    width: var(--card-width);
    position: absolute;
    transform: rotate3D(0.4, 1, 0.4, 0deg) scale(0.4);
    padding: 2em;
    height: 20em;
    overflow: hidden;
}

.thumb {
    width: var(--card-width);
    height: 20em;
    overflow: hidden;
    transition: var(--transition);
    z-index: 0;
    justify-content: center;
    align-items: center;
}

.card4:hover {
    background-color: hsl(0, 0%, 30%);
    box-shadow: 0px 20px 40px hsl(40, 60%, 0%, 0.4),
        inset 1px 2px 4px rgba(255, 255, 255, 0.1);
    transform: scale(1.04);
    border-radius: 50px;
    transition: 1s;
}

.card4:hover .thumb {
    transform: scale(1.2);
}

.card:hover .content {
    transform: none;
    opacity: 1;
    transition: var(--transition);
}

.infomation {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.propertion {
    font-size: 0.8em;
    color: var(--text-color-L2);
}

.action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3em;
    padding: 0 0.5em;
    border-radius: 1em;
    border: 1px solid transparent;
    transition: var(--transition);
}

.action:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.6),
        inset 0.5px 1px 2px rgba(255, 255, 255, 0.1);
    background: hsla(0, 0%, 50%, 0.1);
}

.mode {
    color: var(--text-color-L2);
    padding: 0.4em;
    width: 2em;
    height: 2em;
    border-radius: 0.5em;
    transition: var(--transition);
}

.mode:hover {
    color: var(--text-color);
    background: hsla(0, 0%, 50%, 0.15);
    transform: scale(1.2);
    box-shadow: 2px 4px 16px hsla(0, 0%, 100%, 0.1);
}

.mode:active {
    background: hsla(0, 0%, 50%, 0.3);
    transform: scale(1);
}

.mode.hide {
    opacity: 0;
    transition: var(--transition);
}

.action:hover .mode.hide {
    opacity: 1;
}

.level {
    color: rgb(255, 208, 0);
    width: 375px;
}
</style>