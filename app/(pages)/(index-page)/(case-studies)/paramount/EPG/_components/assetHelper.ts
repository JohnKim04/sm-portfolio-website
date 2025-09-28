// Centralized asset helper for EPG components
// Maps logical asset names to S3 files regardless of alphabetical ordering

export type AssetItem = { key: string; url: string };

export class EPGAssetHelper {
  private assets: AssetItem[];

  constructor(assets: AssetItem[] = []) {
    this.assets = assets;
  }

  // Find video by platform and action
  getVideo(platform: 'desktop' | 'mobile', action: 'pip' | 'search' | 'tiles' | 'favorites'): string {
    const filename = `${platform}-${action}.mp4`;
    const video = this.assets.find(asset => asset.key?.includes(filename));
    return video?.url || '';
  }

  // Find image by name pattern
  getImage(imageName: string): string {
    const image = this.assets.find(asset => asset.key?.includes(imageName));
    return image?.url || '';
  }

  // Get specific EPG assets by logical names
  getWideImages(): string[] {
    return [
      this.getImage('wideImg1'),
      this.getImage('wideImg2'), 
      this.getImage('wideImg3')
    ];
  }

  getHeroImages(): { desktop: string; mobile: string } {
    return {
      desktop: this.getImage('heroDesktop'),
      mobile: this.getImage('heroMobile')
    };
  }

  getNavigationImages(): string[] {
    return [
      this.getImage('nav1'),
      this.getImage('nav2'),
      this.getImage('navFinal')
    ];
  }

  getSportsImages(): string[] {
    return [
      this.getImage('sports1'),
      this.getImage('sports2'),
      this.getImage('sportsFinal')
    ];
  }

  getBottomImages(): string[] {
    return [
      this.getImage('bottom1'),
      this.getImage('bottom2'),
      this.getImage('bottomFinal')
    ];
  }

  getVideoPlayerImages(): string[] {
    return [
      this.getImage('videoPlayerPeek'),
      this.getImage('videoPlayerText'),
      this.getImage('videoPlayerFinal')
    ];
  }

  getCompetitorGuides(): string[] {
    return [
      this.getImage('huluGuide'),
      this.getImage('pluteGuide'),
      this.getImage('tubiGuide')
    ];
  }

  getNoteImages(): string[] {
    return [
      this.getImage('note1'),
      this.getImage('note2'),
      this.getImage('note3'),
      this.getImage('note4')
    ];
  }

  // Get asset by index (fallback for complex mappings)
  getByIndex(index: number): string {
    return this.assets[index]?.url || '';
  }
}
