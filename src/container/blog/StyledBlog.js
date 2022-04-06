import styled from 'styled-components'

export const BlogLand = styled.div `
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        color: #030762
    }

    p{
        color: #505050;
        font-size: 16px
    }

    .searchContainer{
        width: 400px;
        margin-top: 2rem;
        position: relative;
    }

    .searchIcon{
        position: absolute;
        right: 15px;
        top: 10px;
        color: #A8A8A8;
    }

    @media screen and (max-width: 468px){
        h1{
            font-size: 24px;
        }

        .searchContainer{
            padding: 0 2rem;
            position: relative
        }

        .searchIcon{
            position: absolute;
            right: 40px;
            top: 8px;
            color: #A8A8A8;
        }
    }
 
`

export const BlogContainer = styled.div `
    margin-bottom: 4rem;
    /* =========== News ============= */
.news__wrapper{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.news__container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: var(--mb-5);
}

.news__title{
    font-weight: bold;
    font-size: 40px;
    line-height: 112px;
    text-align: center;
    color: var(--black);
    text-transform: capitalize;
}

.news__subtitle{
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
}

.tabContent{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: var(--mb-5) auto;
}
.news__card{
    width: 380px;
    padding: 2rem 2rem;
    margin: var(--mb-3) var(--mb-2);
    border-radius: 6px;
}

.image__container{
    width: 100%;
    height: 200px;
    margin-bottom: .5rem;
}

.news__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.news__card:hover{
    box-shadow: 0px 8px 42px rgba(0, 0, 0, 0.09);
}

.news__card > img{
    padding: var(--mb-2)
}

.news__card__body{
    width: 93%;
    margin: var(--mb-2) var(--mb-2);
}

.news__card__title{
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: var(--kBlack);
}

.news__card__time{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 40px;
    color: var(--kLightGrey);
}

.news__card__read{
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    color: var(--kGreen);
    padding-bottom: var(--mb-3);
}

.news__card__desc{
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: var(--black);
}

.news__navigation{
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem 0 5rem;

}

.arrow__nav{
    display: flex;
    justify-content: center;
}

.news__pagination{
    display: flex;
    justify-content: space-between;
    padding: 0 5rem 0 5rem;
    margin-bottom: var(--mb-6);
}

.prev__icon{
    margin-right: var(--mb-1)
}

.next__icon{
    margin-left: var(--mb-1);
}

.pagination{
    height: 45px;
    background: var(--kSoftGrey);
    border-radius: 6px;
}

.page__items{
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.page__items > li{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--mb-3);
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: var(--kGreen);
}

.page__items .active{
    background: var(--kGreen);
    color: var(--kLightGrey);
    border-radius: 6px;
}
`
