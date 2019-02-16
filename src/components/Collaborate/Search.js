import React, { Component } from 'react';
import Select from 'react-select';
import { LocationWrapper, DistanceWrapper, FormWrapper, SearchWrapper,
  InterestWrapper, SpecialityWrapper, ButtonWrapper, HeaderText, SubheaderText,
  SearchContainer } from './Search.style';
import { LocationOptions, DistanceOptions,
  InterestOptions, SpecialityOptions} from '../../data';

export default class Search extends Component {

  constructor() {
    super();

    this.state = {
      'selectedLocation': LocationOptions[0],
      'selectedDistance': DistanceOptions[0],
      'selectedInterest': InterestOptions[0],
      'selectedSpeciality': SpecialityOptions[0]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e, target) {
    let name = target.name;
    let value = e.value;
    this.setState({
      [name] : value
    });
  }



  render() {
    let { selectedLocation, selectedDistance, selectedInterest, selectedSpeciality } = this.state;
    const labelWithMapMarker = <span className="fa fa-map-marker"><span style={{marginLeft: '6px'}}>Palau Ujong, Singapore</span></span>;
    const labelWithBullsEye = <span className="fa fa-bullseye"><span style={{marginLeft: '6px'}}>5 mi</span></span>
    const labelWithHeart = <span className="fa fa-heart"><span style={{marginLeft: '6px'}}>Cooking</span></span>
    const labelWithLightBulb = <span className="fa fa-lightbulb-o"><span style={{marginLeft: '6px'}}>Italian Cuisine</span></span>
  
    return (
      <SearchContainer>
        <HeaderText>Sed augue ipsum egestas</HeaderText>
        <SubheaderText>Curabitur nisi. Vivamus consectetuer hendrerit.</SubheaderText>
        <SearchWrapper>
          <FormWrapper onSubmit={this.handleSubmit}>
            <LocationWrapper>
              <Select
                defaultValue={{ label: labelWithMapMarker, value: selectedLocation}}
                components={() => (<div></div>)}
                onChange={this.handleChange}
                options={LocationOptions}
                isSearchable={true}
                name="selectedLocation"
                styles={colourStyles}
              ></Select>
            </LocationWrapper>
            <DistanceWrapper>
              <Select
                defaultValue={{ label: labelWithBullsEye, value: selectedDistance}}
                onChange={this.handleChange}
                options={DistanceOptions}
                isSearchable={true}
                name="selectedDistance"
                styles={colourStyles}
              ></Select>
            </DistanceWrapper>
            <InterestWrapper>
              <Select
                defaultValue={{ label: labelWithHeart, value: selectedInterest}}
                onChange={this.handleChange}
                options={InterestOptions}
                isSearchable={true}
                name="selectedInterest"
                styles={colourStyles}
              ></Select>
            </InterestWrapper>
            <SpecialityWrapper>
              <Select
                defaultValue={{ label: labelWithLightBulb, value: selectedSpeciality}}
                onChange={this.handleChange}
                options={SpecialityOptions}
                isSearchable={true}
                name="selectedSpeciality"
                styles={colourStyles}
              ></Select>
            </SpecialityWrapper>
            <ButtonWrapper>
              <button>
                SEARCH
              </button>
            </ButtonWrapper>
          </FormWrapper>
        </SearchWrapper>
      </SearchContainer>
    )
  }
}

const colourStyles = {
  control: styles => ({ ...styles, 
    backgroundColor: 'white',
    fontSize: '15px',
    fontWeight: '400',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontFamily: 'Hind'
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: 'black',
      fontSize: '15px',
      fontWeight: '400',
      paddingTop: '10px',
      paddingBottom: '10px',
      fontFamily: 'Hind',
      backgroundColor: isSelected ? 'var(--selectedGreen)' : isFocused ? 'var(--highlightedGreen)' : 'white',

    }
  },
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles}),
  singleValue: (styles, { data }) => ({ ...styles}),
  indicatorSeparator: styles => ({...styles , display: 'none' }),
  dropdownIndicator: styles => ({...styles , display: 'none' })
};