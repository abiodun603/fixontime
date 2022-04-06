import React, { useEffect } from 'react'
import HeadFoot from '../../components/HeadFoot';
import {ProductsContainer,ProductsContent,PlandingPage,LeftSection,LandingTitle,LandingSubTitle,
LandingPartner,PartnerText,PartnerLogo,NojaImage,LucyElectImage,ReplImage,RightSection,ElectricPic,ProductsCat,GetProduct,FindPro,SearchPro,
SearchInput,SearchImg,Line,ShowProduct,EachProduct,ProductName,ProductStore,ProductItems,ProCard,
ProductImage,ProImg,ItemName,ManufactName} from './Products'
import {Nojaproducts,Lucyproducts,Replproducts, Moreproducts} from '../../components/data/data'
function Products(props) {
    useEffect(() => {
        props.setSidebar(false);
    },[]);
    return (
        <>
            <HeadFoot {...props}>
                <ProductsContainer>
                    <ProductsContent>
                        <PlandingPage>
                            <LeftSection>
                                <LandingTitle>
                                    Products from our trusted partners
                                </LandingTitle>
                                <LandingSubTitle>
                                    Nigeria’s first partners for notable manufacturers
                                </LandingSubTitle>
                                <LandingPartner>
                                    <PartnerText>Partners</PartnerText>
                                    <PartnerLogo>
                                        <NojaImage src={process.env.PUBLIC_URL + `/Image/companylogo/nojapower.svg`} />
                                        <LucyElectImage src={process.env.PUBLIC_URL + `/Image/companylogo/lucyelect.svg`} />
                                        <ReplImage src={process.env.PUBLIC_URL + `/Image/companylogo/repl.svg`} />
                                    </PartnerLogo>
                                </LandingPartner>
                            </LeftSection>
                            <RightSection>
                                <ElectricPic src={process.env.PUBLIC_URL + `/Image/products/p_landingpic.svg`}/>
                            </RightSection>
                        </PlandingPage>
                        <ProductsCat>
                            <GetProduct>
                                <FindPro>
                                    <SearchPro>
                                        <SearchInput type="text" placeholder="Search" />
                                        <SearchImg src={process.env.PUBLIC_URL + `/Image/icon/searchicon.svg` }  />
                                    </SearchPro>
                                    {/* <FilterPro>
                                        <FilterFont src={process.env.PUBLIC_URL +  `Image/icon/filtericon.svg`} />

                                    </FilterPro> */}
                                </FindPro>

                                
                                {/* <HelpInfo>
                                    <Fontwhatsapp />
                                    <HelpText>Need Help?</HelpText>
                                </HelpInfo> */}
                                <ShowProduct>
                                    <Line></Line>
                                    <EachProduct>
                                        <ProductName>Noja Power</ProductName>
                                        <ProductStore>
                                            {Nojaproducts.map((item,index) => {
                                                return (
                                                        <ProductItems to={`/productsDetails/Nojaproducts/${item.id}`}>
                                                            <ProCard>
                                                                <ProductImage>
                                                                    <ProImg src={process.env.PUBLIC_URL + `Image/${item.image}`} />
                                                                </ProductImage>
                                                                <ItemName style={{marginRight: 20}}>{item.name}</ItemName>
                                                                <ManufactName>
                                                                    {/* Manufacturer: <SpanText>{item.manufacturer}</SpanText> */}
                                                                </ManufactName>
                                                            </ProCard>
                                                        </ProductItems>
                                                    )
                                            })}
                                        </ProductStore>  
                                    </EachProduct>

                                    <Line></Line>
                                    <EachProduct>
                                        <ProductName>Lucy Electric</ProductName>
                                        <ProductStore>
                                            {Lucyproducts.map((item,index) => {
                                                return (
                                                        <ProductItems to={`/productsDetails/Lucyproducts/${item.id}`}>
                                                            <ProCard>
                                                                <ProductImage>
                                                                    <ProImg src={process.env.PUBLIC_URL + `Image/${item.image}`} />
                                                                </ProductImage>
                                                                <ItemName>{item.name}</ItemName>
                                                                <ManufactName>
                                                                    {/* Manufacturer: <SpanText>{item.manufacturer}</SpanText> */}
                                                                </ManufactName>
                                                            </ProCard>
                                                        </ProductItems>
                                                    )
                                            })}
                                        </ProductStore>  
                                    </EachProduct>

                                    <Line></Line>
                                    <EachProduct>
                                        <ProductName>REPL</ProductName>
                                        <ProductStore>
                                            {Replproducts.map((item,index) => {
                                                return (
                                                        <ProductItems key={item.id} to={`/productsDetails/Replproducts/${item.id}`}>
                                                            <ProCard>
                                                                <ProductImage>
                                                                    <ProImg src={process.env.PUBLIC_URL + `Image/${item.image}`} />
                                                                </ProductImage>
                                                                <ItemName>{item.name}</ItemName>
                                                                <ManufactName>
                                                                </ManufactName>
                                                            </ProCard>
                                                        </ProductItems>
                                                    )
                                            })}
                                        </ProductStore>  
                                    </EachProduct>

                                    <Line></Line>
                                    <EachProduct>
                                        <ProductName>More product</ProductName>
                                        <ProductStore>
                                            {Moreproducts.map((item,index) => {
                                                return (
                                                        <ProductItems key={item.id} to={`/productsDetails/Replproducts/${item.id}`}>
                                                            <ProCard>
                                                                <ProductImage>
                                                                    <ProImg src={process.env.PUBLIC_URL + `Image/${item.image}`} />
                                                                </ProductImage>
                                                                <ItemName>{item.name}</ItemName>
                                                                <ManufactName>
                                                                </ManufactName>
                                                            </ProCard>
                                                        </ProductItems>
                                                    )
                                            })}
                                        </ProductStore>  
                                    </EachProduct>
                                </ShowProduct>
                            </GetProduct>
                        </ProductsCat>
                    </ProductsContent>
                </ProductsContainer>
            </HeadFoot>
        
        </>
    )
}

export default Products
