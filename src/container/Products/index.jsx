import React, { useEffect } from 'react'
import HeadFoot from '../../components/HeadFoot';
import {ProductsContainer,ProductsContent,PlandingPage,LeftSection,LandingTitle,LandingSubTitle,
LandingPartner,PartnerText,PartnerLogo,NojaImage,LucyElectImage,ReplImage,RightSection,ElectricPic,ProductsCat,GetProduct,FindPro,SearchPro,
SearchInput,SearchImg,Line,ShowProduct,EachProduct,ProductName,ProductStore,ProductItems,ProCard,
ProductImage,ProImg,ItemName,ManufactName} from './Products'
import {Nojaproducts,Lucyproducts,Replproducts, Moreproducts} from '../../components/data/data'
import npower from "../../assets/image/brands/noja-power.svg"
import lucy from "../../assets/image/brands/lucy-electric.svg"
import repl from "../../assets/image/brands/repl.svg"
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
                    Products from Our Trusted Partners
                  </LandingTitle>
                  <LandingSubTitle>
                    Nigeria’s Foremost Partner for Notable Manufacturers
                  </LandingSubTitle>
                  <LandingPartner>
                    <PartnerText>Partners</PartnerText>
                    <PartnerLogo>
                      <a href="https://www.nojapower.com.au" target="_blank" rel="noopener noreferrer"> <img src={npower} alt="nodja power" /> </a>
                      <a href="https://www.lucyelectric.com" target="_blank" rel="noopener noreferrer"> <img src={lucy} alt="lucy electric"/> </a>
                      <a href="https://www.repl.com" rel="noopener noreferrer" target="_blank"> <img src={repl} alt="repl"/> </a>
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
                  </FindPro>
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
                      <ProductName>More products</ProductName>
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
